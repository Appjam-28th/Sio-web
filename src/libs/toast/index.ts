import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// 토스트 메시지 설정 함수
const showToast = (message: string, type: 'success' | 'error' | 'info' | 'warn', duration: number = 5000) => {
    switch (type) {
        case 'success':
            toast.success(message, { autoClose: duration });
            break;
        case 'error':
            toast.error(message, { autoClose: duration });
            break;
        case 'info':
            toast.info(message, { autoClose: duration });
            break;
        case 'warn':
            toast.warn(message, { autoClose: duration });
            break;
        default:
            toast(message, { autoClose: duration });
            break;
    }
};

// 성공 메시지
const showSuccess = (message: string, duration?: number) => {
    showToast(message, 'success', duration);
};

// 에러 메시지
const showError = (message: string, duration?: number) => {
    showToast(message, 'error', duration);
};

// 정보 메시지
const showInfo = (message: string, duration?: number) => {
    showToast(message, 'info', duration);
};

// 경고 메시지
const showWarn = (message: string, duration?: number) => {
    showToast(message, 'warn', duration);
};

// 기본적으로 export 하여 어디서든 사용할 수 있도록
export { showSuccess, showError, showInfo, showWarn };
