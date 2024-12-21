import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY, REQUEST_TOKEN_KEY } from './token.constants';

class Token {
    // 토큰을 로컬 스토리지에서 가져오기
    public getToken(key: string): string | null {
        return localStorage.getItem(key);
    }

    // 토큰을 로컬 스토리지에 저장하기
    public setToken(key: string, token: string): void {
        localStorage.setItem(key, token);
    }

    // 로컬 스토리지에서 토큰 삭제하기
    public clearToken() {
        localStorage.removeItem(ACCESS_TOKEN_KEY);
        localStorage.removeItem(REFRESH_TOKEN_KEY);
        localStorage.removeItem(REQUEST_TOKEN_KEY); // 추가된 부분
    }

    // requestToken: 로컬 스토리지에서 토큰을 가져와서 API 요청에 사용
    public requestToken(): string | null {
        // REQUEST_TOKEN_KEY로 토큰을 가져옴
        const token = this.getToken(REQUEST_TOKEN_KEY);

        // 토큰이 없으면 null을 반환하거나 필요한 처리를 할 수 있음
        if (!token) {
            console.error('No request token found');
            return null;
        }

        // API 요청에 사용될 Authorization 헤더 형식으로 반환
        return `Bearer ${token}`;
    }
}

export default new Token();
