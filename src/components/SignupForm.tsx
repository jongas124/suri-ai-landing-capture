
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, User } from "lucide-react";

const SignupForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Inscrição recebida!",
        description: "Obrigado por se inscrever. Entraremos em contato em breve.",
        duration: 5000,
      });
      
      setName('');
      setEmail('');
      setPhone('');
      setLoading(false);
    }, 1000);
  };
  
  return (
    <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-lg border border-gray-100">
      <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">Inscreva-se Agora</h3>
      <p className="text-gray-600 text-center mb-6">
        Junte-se a nós e descubra como o Método SURI pode transformar sua forma de aprender.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <User size={18} />
          </div>
          <Input 
            placeholder="Seu nome completo" 
            className="pl-10 py-6"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        
        <div className="relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <Mail size={18} />
          </div>
          <Input 
            type="email" 
            placeholder="Seu melhor email" 
            className="pl-10 py-6"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        <div className="relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <Phone size={18} />
          </div>
          <Input 
            type="tel" 
            placeholder="Seu telefone" 
            className="pl-10 py-6"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-suri-500 hover:bg-suri-600 py-6"
          disabled={loading}
        >
          {loading ? "Enviando..." : "Enviar Cadastro"}
        </Button>
      </form>
      
      <p className="text-xs text-gray-500 mt-4 text-center">
        Ao se inscrever, você concorda com nossa Política de Privacidade e Termos de Uso.
      </p>
    </div>
  );
};

export default SignupForm;
