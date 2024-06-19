import { Actor, Color, Engine, FadeInOut, Keys, Scene, SceneActivationContext, Transition, vec } from "excalibur";
import { Resources } from "../resources";

export class historyScene extends Scene {
    // Declaração do elementoTexto
    elementoTexto?: HTMLElement

    // Método para esmaecer um elemento HTML
    fadeOutElement(elemento: HTMLElement) {
        // Pegar opacidade do elemento HTML
        let opacidade = parseFloat(elemento.style.opacity)

        // Repetir diminuição da opacidade
        setInterval(() => {
            // Se elemento ainda está visivel
            if (opacidade > 0) {
            // Diminuir a opacidade
            opacidade = opacidade - 0.01

            // Atualizar a opacidade do elemento
            elemento.style.opacity = opacidade.toString()
        }

    }, 20)

    }

    // Ao entrar ou sair da cena, utiliza o feito de transição lenta
    onTransition(direction: "in" | "out"): Transition | undefined {
        return new FadeInOut({
          direction: direction,
          color: Color.Black,
          duration: 1000  
        })
    } 
    
    onInitialize(engine: Engine<any>): void {
        this.backgroundColor = Color.fromHex("#403f4c")

        // Criar elemento com a descrição da empresa
        this.elementoTexto = document.createElement("div") as HTMLElement

        // Definir opacidade do elemento para 1 = visível
        this.elementoTexto.style.opacity = "1"

        // Inseri o elementoTexto no container-game
        let containerGame = document.querySelector(".container-game") as HTMLElement
        containerGame?.appendChild(this.elementoTexto)

        // Adicionar classe na div criada("elementoTexto")
        this.elementoTexto?.classList.add("sobre-gamifica")

        // Adicionar titulo e paragrafo dentro do conteudo da div
        this.elementoTexto.innerHTML = ` <h2>Sobre o GamificaAi</h2>
        <p>Nossa empresa cria soluções de gamificação personalizadas para empresas de todos os tamanhos e setores,
          usando inteligência artificial e design de jogos para desenvolver estratégias interativas que melhoram a
          experiência do usuário e impulsionam resultados. Acreditamos no poder dos jogos e da tecnologia para engajar
          equipes, aumentar a produtividade e motivar, adaptando cada projeto às necessidades específicas do cliente,
          desde programas de treinamento interativo até sistemas de recompensa e engajamento de funcionários.</p>`

        let actorVertical = new Actor({
            pos: vec(engine.drawWidth - 300, engine.halfDrawHeight),
        })

        let logoVertical = Resources.logoVertical.toSprite()

        logoVertical.scale = vec(1.0, 1.0)

        actorVertical.graphics.add(logoVertical)
        
        this.add(actorVertical)

        // Configurar a cena para monitorar o evento da tecla pressionada
        this.input.keyboard.on("press", (event) => {
            if (event.key == Keys.Enter) {
                // Criar Transição suave do elemento texto
                this.fadeOutElement(this.elementoTexto!)

                // Direcionar para a próxima cena
                engine.goToScene("gamificacao")

            }
        })
        
    }

    onDeactivate(context: SceneActivationContext<undefined>): void {
        // Remover elemento texto da tela
        this.elementoTexto?.remove()
    }
}