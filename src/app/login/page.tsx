import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/page.module.scss';

export default function Login() {
  return (
    <main className={styles.main}>
      <div>
        <h1>Login</h1>
        <div className={styles.socialArea}>
          <button className={styles.socialBtn} type="button">
            <Image
              src="/assets/img/google.svg"
              alt="google Logo"
              width={24}
              height={24}
              priority
            />
            <span className={styles.title}>Google로그인</span>
          </button>
          <button className={styles.socialBtn} type="button">
            <Image
              src="/assets/img/line.svg"
              alt="line Logo"
              width={24}
              height={24}
              priority
            />
            <span className={styles.title}>LINE로그인</span>
          </button>
          <button className={styles.socialBtn} type="button">
            <span className={styles.title}>비회원사용</span>
          </button>
        </div>
      </div>
    </main>
  );
}