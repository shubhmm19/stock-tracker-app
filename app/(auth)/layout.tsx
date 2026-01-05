import Link from "next/link";
import Image from "next/image";
import react from "react";

const Layout =  ({ children }: { children : React.ReactNode }) => {
    return (
        <main className="auth-layout">
            <section className="auth-left-section scrollbar-hide-default">
                <Link href="/public" className="auth-logo">
                    <Image src="/assets/icons/logo.svg" alt="Signalist" width={40} height={32} className="h-8 w-auto" />
                </Link>

                <div className="pb-6 lg:pb-8 flex-1">{children}</div>
            </section>
            <section>

            </section>
        </main>
    )
}