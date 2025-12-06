import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
    const [nit, setNit] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = (e: FormEvent) => {
        e.preventDefault();
        if (!nit) return;

        setLoading(true);
        // Simulate a small delay for better UX or proceed immediately
        // In this case, we just redirect
        window.location.href = `https://${nit}.venty.com.co`;
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Iniciar Sesión</DialogTitle>
                    <DialogDescription>
                        Ingresa el NIT de tu empresa para acceder a tu cuenta.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleLogin} className="space-y-4 pt-4">
                    <div className="space-y-2">
                        <Input
                            id="nit"
                            placeholder="Ej: 1122336630"
                            value={nit}
                            onChange={(e) => setNit(e.target.value)}
                            className="text-lg"
                            autoFocus
                            type="number"
                            required
                        />
                    </div>
                    <div className="flex justify-end gap-3">
                        <Button type="button" variant="outline" onClick={onClose}>
                            Cancelar
                        </Button>
                        <Button type="submit" disabled={!nit || loading}>
                            {loading ? "Redirigiendo..." : "Ingresar"}
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default LoginModal;
