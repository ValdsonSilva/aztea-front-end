"use client";
import Image from "next/image";
import { useState } from "react";
import { Bell, Camera, ChevronRight, Languages, LogOut, Moon, Pencil, Settings, Sun } from "lucide-react";


// Small, reusable UI bits -----------------------------------------------------
function SectionCard({ title, children, className = "" }: { title?: string; children: React.ReactNode; className?: string }) {
    return (
        <section className={`rounded-2xl border border-zinc-800/70 bg-zinc-900/40 backdrop-blur p-4 sm:p-6 ${className}`}>
            {title ? (
                <h2 className="text-zinc-200 text-base sm:text-lg font-semibold tracking-tight mb-3 sm:mb-4">{title}</h2>
            ) : null}
            {children}
        </section>
    );
}

function FieldLabel({ children, htmlFor }: { children: React.ReactNode; htmlFor?: string }) {
    return (
        <label htmlFor={htmlFor} className="block text-sm text-zinc-400 mb-2">
            {children}
        </label>
    );
}

function Input({ id, defaultValue, type = "text", placeholder }: { id?: string; defaultValue?: string; type?: string; placeholder?: string }) {
    return (
        <input
            id={id}
            defaultValue={defaultValue}
            placeholder={placeholder}
            type={type}
            className="w-full rounded-md border border-yellow-500/30 bg-black/60 px-3 py-2 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/60"
        />
    );
}

function Button({ children, onClick, variant = "solid", className = "", type = "button" }: { children: React.ReactNode; onClick?: () => void; variant?: "solid" | "ghost" | "outline"; className?: string; type?: "button" | "submit" }) {
    const base = "inline-flex items-center justify-center gap-2 rounded-md text-sm px-3 py-2 transition";
    const map: Record<string, string> = {
        solid: "bg-[var(--white)] text-black hover:bg-yellow-400",
        ghost: "bg-transparent text-zinc-300 hover:text-white hover:bg-zinc-800/60",
        outline: "border border-zinc-700 text-zinc-200 hover:bg-zinc-800/60",
    };
    return (
        <button type={type} onClick={onClick} className={`${base} ${map[variant]} ${className}`}>
            {children}
        </button>
    );
}

function Toggle({ checked, onChange, id }: { checked: boolean; onChange: (val: boolean) => void; id?: string }) {
    return (
        <button
            id={id}
            aria-pressed={checked}
            onClick={() => onChange(!checked)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition border border-zinc-700 ${checked ? "bg-[var(--yellow)]" : "bg-zinc-800"}`}
        >
            <span className={`inline-block h-5 w-5 transform rounded-full bg-black transition ${checked ? "translate-x-5" : "translate-x-1"}`} />
            <span className="sr-only">Toggle</span>
        </button>
    );
}

// Page ------------------------------------------------------------------------
export default function AccountPage() {
    const [notifications, setNotifications] = useState(true);
    const [theme, setTheme] = useState<"system" | "dark" | "light">("dark");
    const [language, setLanguage] = useState("English");

    const saved = [
        "/placeholder/1.jpg",
        "/placeholder/2.jpg",
        "/placeholder/3.jpg",
        "/placeholder/4.jpg",
        "/placeholder/5.jpg",
        "/placeholder/6.jpg",
    ];

    return (
        <main className="min-h-dvh bg-black text-white">
            {/* Top bar */}
            <header className="sticky top-0 z-30 border-b border-zinc-900/80 bg-black/70 backdrop-blur">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        {/* Brand mark */}
                        <div className="font-black tracking-wider text-2xl leading-none">
                            <span className="bg-white text-black px-1.5 py-0.5 rounded-sm">AZTEA</span>
                            <span className="ml-2 text-zinc-300">MEDIA</span>
                        </div>
                    </div>
                    <nav className="flex items-center gap-2">
                        <Button variant="ghost" className="gap-1">
                            <Settings className="h-4 w-4" />
                            <span className="hidden sm:inline">Settings</span>
                        </Button>
                        <Button variant="ghost" className="gap-1">
                            <LogOut className="h-4 w-4" />
                            <span className="hidden sm:inline">Logout</span>
                        </Button>
                    </nav>
                </div>
            </header>

            {/* Content */}
            <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-12">
                {/* Profile block */}
                <div className="flex flex-col items-center text-center gap-4">
                    <div className="relative">
                        <Image
                            src="/avatar.png"
                            alt="User avatar"
                            width={112}
                            height={112}
                            className="h-28 w-28 rounded-full ring-2 ring-yellow-500/50 object-cover"
                        />
                        <button
                            className="absolute -bottom-1 -right-1 rounded-full bg-yellow-500 p-1.5 text-black shadow-lg"
                            aria-label="Change avatar"
                        >
                            <Camera className="h-4 w-4" />
                        </button>
                    </div>

                    <div>
                        <div className="flex items-center justify-center gap-2">
                            <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">Frandy Baptiste</h1>
                            <button className="p-1 rounded hover:bg-zinc-800" aria-label="Edit name">
                                <Pencil className="h-4 w-4 text-zinc-400" />
                            </button>
                        </div>
                        <p className="text-sm text-zinc-400">@frandy_2025</p>
                    </div>
                </div>

                {/* Saved ones */}
                <section className="mt-8 sm:mt-12">
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                        <h2 className="text-zinc-200 text-base sm:text-lg font-semibold tracking-tight">Saved ones</h2>
                        <Button variant="ghost" className="text-zinc-400 hover:text-white">
                            View all <ChevronRight className="h-4 w-4" />
                        </Button>
                    </div>
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                        {saved.map((src, i) => (
                            <div key={i} className="aspect-square overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900">
                                <Image
                                    src={src}
                                    alt={`Saved ${i + 1}`}
                                    width={320}
                                    height={320}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </section>

                {/* Settings grid */}
                <div className="mt-8 sm:mt-12 grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
                    {/* Account Settings card */}
                    <SectionCard title="Account Settings" className="lg:col-span-2">
                        <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3 sm:gap-4 items-end">
                            <div>
                                <FieldLabel htmlFor="email">Email</FieldLabel>
                                <Input id="email" type="email" defaultValue="frandy_2025@example.com" />
                            </div>
                            <div className="sm:pb-[2px]">
                                <Button className="w-full sm:w-auto">Change password</Button>
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <FieldLabel>Preferences</FieldLabel>
                                <div className="flex flex-wrap gap-2">
                                    <Button variant="outline" onClick={() => setTheme("dark")} className={theme === "dark" ? "border-yellow-500/60" : ""}>
                                        <Moon className="h-4 w-4" /> Theme
                                    </Button>
                                    <Button variant="outline" onClick={() => setLanguage("English")} className={language === "English" ? "border-yellow-500/60" : ""}>
                                        <Languages className="h-4 w-4" /> Language
                                    </Button>
                                </div>
                            </div>

                            <div>
                                <FieldLabel>Notifications</FieldLabel>
                                <div className="flex items-center gap-3">
                                    <Toggle checked={notifications} onChange={setNotifications} />
                                    <span className="text-sm text-zinc-400">Enable push notifications</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 border-t border-zinc-800 pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                            <a href="#" className="inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-white">
                                Help & Support <ChevronRight className="h-4 w-4" />
                            </a>
                            <div className="flex items-center gap-2 text-xs text-zinc-500">
                                <Sun className={`h-4 w-4 ${theme === "light" ? "text-yellow-400" : ""}`} />
                                <span className="uppercase tracking-wide">{theme}</span>
                            </div>
                        </div>
                    </SectionCard>

                    {/* Quick actions */}
                    <SectionCard title="Quick actions" className="lg:col-span-1">
                        <div className="space-y-2">
                            <Button variant="ghost" className="w-full justify-between">
                                Edit profile <Pencil className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" className="w-full justify-between">
                                Notification settings <Bell className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" className="w-full justify-between">
                                Appearance <Moon className="h-4 w-4" />
                            </Button>
                        </div>
                    </SectionCard>
                </div>
            </div>

            {/* Footer */}
            <footer className="border-t border-zinc-900/80 py-6 text-center text-xs text-zinc-500">
                © {new Date().getFullYear()} Aztea Media — All rights reserved.
            </footer>
        </main>
    );
}
