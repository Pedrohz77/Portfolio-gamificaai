import { Actor, Color, Engine, Keys, Scene, SceneActivationContext, vec } from "excalibur";
import { Resources } from "../resources";

export class gamificationScene extends Scene {
    // Declaração do elementoTexto
    elementoGamificacao?: HTMLElement

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

    onInitialize(engine: Engine<any>): void {
        this.backgroundColor = Color.fromHex("#403f4c")

        this.elementoGamificacao = document.createElement("div") as HTMLElement
        this.elementoGamificacao.style.opacity = "1"

        let containerGame = document.querySelector(".container-game")
        containerGame?.appendChild(this.elementoGamificacao)
        
        console.log(this.elementoGamificacao);
        
        
        this.elementoGamificacao?.classList.add("sobre-gamificacao")
        
        this.elementoGamificacao.innerHTML = `<h2>O que é gamificação?</h2>
        <p>Gamificação é a aplicação de elementos típicos de jogos em contextos não lúdicos, com o objetivo de engajar
        e motivar indivíduos a atingir determinados objetivos. Esta abordagem se utiliza de componentes como pontuação,
        níveis, recompensas, desafios, e feedback imediato, visando promover comportamentos desejados e aumentar
        a participação e o comprometimento dos participantes.</p>`
        
        
        let actorGamificacao = new Actor({
            pos: vec(300, engine.halfDrawHeight),
        })

        let Logogamificacao = Resources.logoVertical.toSprite()

        Logogamificacao.scale = vec(0.7, 0.7)

        actorGamificacao.graphics.add(Logogamificacao)

        this.add(actorGamificacao)

        // Configurar a cena para detectar a tecla Enter e ir para a próxima cena
        this.input.keyboard.on("press", (event) => {
            if (event.key == Keys.Enter) {
                engine.goToScene("exposicao")
            }
        })
    }

    onDeactivate(context: SceneActivationContext<undefined>): void {
        this.elementoGamificacao?.remove()
    }
}