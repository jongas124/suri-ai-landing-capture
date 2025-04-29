
import React from "react";
import NavBar from "@/components/NavBar";
import SignupForm from "@/components/SignupForm";
import MethodPillar from "@/components/MethodPillar";
import { Button } from "@/components/ui/button";
import { Brain, Fingerprint, BarChart, Cpu } from "lucide-react";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-suri-50">
      <NavBar />
      
      {/* Hero Section */}
      <section className="hero-section pt-24">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Revolucione seu aprendizado com o{" "}
              <span className="text-suri-500">Método SURI</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-700 mb-8 max-w-xl mx-auto lg:mx-0">
              Aprendizado personalizado baseado em neurociência e comportamento para você finalmente aprender de verdade.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Button className="bg-suri-500 hover:bg-suri-600 text-lg px-8 py-6">
                <a href="#register">Comece Agora</a>
              </Button>
              <Button variant="outline" className="border-suri-500 text-suri-500 hover:bg-suri-50 text-lg px-8 py-6">
                <a href="#method">Saiba Mais</a>
              </Button>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative z-10 animate-float">
              <svg
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full max-w-lg mx-auto"
              >
                <path
                  fill="#3d8fff"
                  d="M47.7,-67.1C59.5,-55.3,65.5,-37.9,70.2,-20.2C74.9,-2.4,78.4,15.6,72.6,29.5C66.8,43.4,51.9,53.2,36.4,59.2C20.9,65.3,4.8,67.7,-11.4,65.8C-27.6,64,-43.9,58.1,-57.5,46.8C-71.1,35.5,-82,18.7,-83.7,0.9C-85.5,-16.8,-78.1,-33.6,-66.2,-46.2C-54.2,-58.8,-37.7,-67.2,-21.7,-69.6C-5.7,-71.9,9.9,-68.3,25.6,-66.2C41.3,-64.1,56.9,-63.6,47.7,-67.1Z"
                  transform="translate(100 100)"
                  className="opacity-20 animate-pulse-slow"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white p-6 rounded-lg shadow-2xl w-full max-w-sm mx-auto">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-suri-500 flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-2xl">S</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900">Método SURI</h3>
                      <p className="text-sm text-gray-600">Aprenda como você nunca imaginou</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-suri-50 p-3 rounded-lg flex items-start">
                      <div className="w-8 h-8 rounded-full bg-suri-500/20 flex items-center justify-center mr-3 mt-1">
                        <span className="text-suri-600 font-semibold">S</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Simple</p>
                        <p className="text-sm text-gray-600">Clareza e objetividade na jornada</p>
                      </div>
                    </div>
                    <div className="bg-suri-50 p-3 rounded-lg flex items-start">
                      <div className="w-8 h-8 rounded-full bg-suri-500/20 flex items-center justify-center mr-3 mt-1">
                        <span className="text-suri-600 font-semibold">U</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Universal</p>
                        <p className="text-sm text-gray-600">Aplicável para qualquer perfil</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Method Section */}
      <section id="method" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
              O Método <span className="text-suri-500">SURI</span>
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Uma abordagem de ensino personalizada, comportamental e neurocientífica, 
              criada para resolver problemas emocionais no aprendizado.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MethodPillar 
              title="Comportamento"
              description="Análise DISC, estilos de aprendizagem e forças de caráter para entender como você aprende."
              icon={<BarChart size={32} />}
            />
            <MethodPillar 
              title="Personalização"
              description="Cada jornada é única. Match perfeito entre o aluno e o conteúdo."
              icon={<Fingerprint size={32} />}
            />
            <MethodPillar 
              title="Neurociência"
              description="Microvitórias que liberam dopamina e foco na curva do esquecimento."
              icon={<Brain size={32} />}
            />
            <MethodPillar 
              title="Tecnologia"
              description="A IA amplifica o aprendizado com automação inteligente baseada em dados."
              icon={<Cpu size={32} />}
            />
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section id="benefits" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
              Benefícios do Método SURI
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Descubra como nossa abordagem única de aprendizado pode transformar sua experiência educacional.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-suri-50 p-6 rounded-lg">
              <div className="h-12 w-12 rounded-full bg-suri-100 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-suri-500">S</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Simple</h3>
              <p className="text-gray-600">Clareza e objetividade na jornada de aprendizado para evitar confusão e manter o foco.</p>
            </div>
            
            <div className="bg-suri-50 p-6 rounded-lg">
              <div className="h-12 w-12 rounded-full bg-suri-100 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-suri-500">U</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Universal</h3>
              <p className="text-gray-600">Aplicável para qualquer pessoa, com qualquer perfil, garantindo inclusão e adaptabilidade.</p>
            </div>
            
            <div className="bg-suri-50 p-6 rounded-lg">
              <div className="h-12 w-12 rounded-full bg-suri-100 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-suri-500">R</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Routine</h3>
              <p className="text-gray-600">A força da repetição com propósito, criando hábitos de aprendizado efetivos.</p>
            </div>
            
            <div className="bg-suri-50 p-6 rounded-lg">
              <div className="h-12 w-12 rounded-full bg-suri-100 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-suri-500">I</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Individual</h3>
              <p className="text-gray-600">Foco total na individualidade do aluno, respeitando seu tempo e estilo de aprendizagem.</p>
            </div>
            
            <div className="bg-suri-50 p-6 rounded-lg">
              <div className="h-12 w-12 rounded-full bg-suri-100 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-suri-500">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Quebra de Travas Emocionais</h3>
              <p className="text-gray-600">Elimina o medo de errar e a frustração com métodos genéricos que não funcionam.</p>
            </div>
            
            <div className="bg-suri-50 p-6 rounded-lg">
              <div className="h-12 w-12 rounded-full bg-suri-100 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-suri-500">🚀</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Alta Performance</h3>
              <p className="text-gray-600">Aprendizado leve, verdadeiro e eficiente, com progresso visível e motivador.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Register Section */}
      <section id="register" className="py-24 bg-gradient-to-b from-suri-50 to-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="flex-1 max-w-xl">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
                Junte-se a Nós e Transforme Sua Forma de Aprender
              </h2>
              <p className="text-gray-700 mb-8">
                Preencha o formulário ao lado e tenha acesso exclusivo ao Método SURI. 
                Nossa equipe entrará em contato para mostrar como podemos personalizar sua experiência de aprendizado.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-suri-100 flex items-center justify-center mr-4">
                    <span className="text-suri-500 font-bold">1</span>
                  </div>
                  <p className="text-gray-700">Preencha seus dados no formulário</p>
                </div>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-suri-100 flex items-center justify-center mr-4">
                    <span className="text-suri-500 font-bold">2</span>
                  </div>
                  <p className="text-gray-700">Nossa equipe entrará em contato</p>
                </div>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-suri-100 flex items-center justify-center mr-4">
                    <span className="text-suri-500 font-bold">3</span>
                  </div>
                  <p className="text-gray-700">Descubra o poder do Método SURI</p>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <SignupForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <div className="mb-4">
                <img 
                  src="/docs/suri_logo.png" 
                  alt="Suri AI Logo" 
                  className="h-12 w-auto" /* Increased from h-20 to h-24 */
                />
              </div>
              <p className="text-gray-400 max-w-md">
                Revolucionando o aprendizado através de técnicas baseadas em neurociência,
                comportamento e tecnologia avançada.
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400">&copy; {new Date().getFullYear()} Suri AI. Todos os direitos reservados.</p>
              <div className="flex space-x-4 mt-4 justify-center md:justify-end">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Termos de Uso</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Política de Privacidade</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
