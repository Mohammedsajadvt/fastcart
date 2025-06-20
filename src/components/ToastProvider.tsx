import * as Toast from '@radix-ui/react-toast';
import { createContext, useContext, useState, type ReactNode } from 'react';
import { X } from 'lucide-react';

interface ToastContextProps {
  showToast: (message: string, type?: 'success' | 'error') => void;
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) throw new Error("useToast must be used within a ToastProvider");
  return context;
};

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [type, setType] = useState<'success' | 'error'>('success');

  const showToast = (msg: string, toastType: 'success' | 'error' = 'success') => {
    setMessage(msg);
    setType(toastType);
    setOpen(true);
  };

  const getToastStyles = () => {
    switch (type) {
      case 'error':
        return 'toast-error';
      case 'success':
        return 'toast-success';
      default:
        return 'toast-default';
    }
  };

  return (
    <>
      <style>
        {`
          .toast-root {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 12px 16px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 9999;
            width: 300px;
            font-size: 14px;
            font-weight: 500;
          }
          .toast-success {
            background-color: #16a34a; /* Green */
            color: #ffffff;
          }
          .toast-error {
            background-color: #dc2626; /* Red */
            color: #ffffff;
          }
          .toast-default {
            background-color: #1f2937; /* Gray */
            color: #ffffff;
          }
          .toast-close {
            padding: 4px;
            border-radius: 50%;
            background: none;
            border: none;
            cursor: pointer;
            transition: background-color 0.2s;
          }
          .toast-close:hover {
            background-color: rgba(255, 255, 255, 0.1);
          }
          .toast-viewport {
            position: fixed;
            bottom: 0;
            right: 0;
            padding: 16px;
            width: 300px;
          }
        `}
      </style>
      <ToastContext.Provider value={{ showToast }}>
        <Toast.Provider swipeDirection="right" duration={3000}>
          {children}
          <Toast.Root
            open={open}
            onOpenChange={setOpen}
            className={`toast-root ${getToastStyles()}`}
          >
            <Toast.Title>{message}</Toast.Title>
            <Toast.Close asChild>
              <button className="toast-close">
                <X size={16}/>
              </button>
            </Toast.Close>
          </Toast.Root>
          <Toast.Viewport className="toast-viewport" />
        </Toast.Provider>
      </ToastContext.Provider>
    </>
  );
};