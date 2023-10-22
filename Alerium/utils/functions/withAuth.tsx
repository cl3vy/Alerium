import { useRouter } from 'next/router';
import React, { ReactNode, useEffect } from "react";


export default function withAuth(Component: React.ComponentType<any>) {
  return function AuthenticatedComponent(props: React.PropsWithChildren<any>) {
    const router = useRouter();

    useEffect(() => {
      // Check if user is authenticated here
      // This is just a placeholder condition
      const isAuthenticated = false;

      if (!isAuthenticated) {
        router.push('/login');
      }
    }, []);

    return <Component {...props} />;
  };
}
