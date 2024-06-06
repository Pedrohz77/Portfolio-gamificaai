import { Actor, Color, Engine, Scene, vec } from "excalibur";
import { Resources } from "../resources";

export class gamificationScene extends Scene {
// Declaração do elementoTexto
elementoGamificacao?: HTMLElement

    onInitialize(engine: Engine<any>): void {
        this.backgroundColor = Color.fromHex("#403f4c")
    
            this.elementoGamificacao = document.createElement("div") as HTMLElement
            this.elementoGamificacao.style.opacity = "1"
    
            let containerGame = document.querySelector(".container-game") as HTMLElement
            containerGame.appendChild(this.elementoGamificacao)
    
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
    
    }
}