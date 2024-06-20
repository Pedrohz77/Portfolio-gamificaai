import { Actor, Color, Engine, FadeInOut, Keys, Scene, SceneActivationContext, Transition, vec } from "excalibur";
import { Resources } from "../resources";

export class caseScene extends Scene {
    private objetoInteracao: any
    
    private textoDaCena?: string
    elementoCases?: HTMLElement

    nTransition(direction: "in" | "out"): Transition | undefined {
        return new FadeInOut({
            direction: direction,
            color: Color.Black,
            duration: 1000
        })
    }

    onActivate(context: SceneActivationContext<unknown>): void {
        // Pegar dados vindos da cena passada
        this.objetoInteracao = context.data

        console.log(this.objetoInteracao);

        // Se for a mesa a 
        if (this.objetoInteracao.nomeDoActor == "mesa_stand_a") {
            this.textoDaCena = "Essa é a descrição do case A"

            this.backgroundColor = Color.Gray

            this.elementoCases = document.createElement("div") as HTMLElement
    
            this.elementoCases.style.opacity = "1"
    
            let containerGame = document.querySelector(".container-game") as HTMLElement
            containerGame?.appendChild(this.elementoCases)
    
            this.elementoCases?.classList.add("sobre-gamifica")
    
            this.elementoCases.innerHTML = `<h2>Escola "Estrela do Amanhã"<h2>
            <p>A implementação ousada da gamificação nas tarefas escolares, uma mudança que transformou a maneira como os alunos encaravam seus estudos diários. Antes, a matemática parecia um labirinto sem fim de números entediantes e equações complicadas. Hoje, porém, os alunos se viam em uma jornada emocionante através de "Mundo dos Números", onde cada problema resolvido os aproximava da próxima conquista. Multiplicar e dividir tornou-se desafios a serem superados, cada resposta certa sendo uma chave para desbloquear novos níveis e prêmios.</p>`

            
        let actorEscola = new Actor({
            pos: vec(this.engine.drawWidth - 300, this.engine.halfDrawHeight),
        })

        let Escolagamificacao = Resources.Escolagamificacao.toSprite()

        Escolagamificacao.scale = vec(0.6, 0.6)

        actorEscola.graphics.add(Escolagamificacao)
        
        this.add(actorEscola)
        }

        // Se for B
        if (this.objetoInteracao.nomeDoActor == "mesa_stand_b") {
            this.textoDaCena = "Essa é a descrição do case B"
            this.backgroundColor = Color.Gray

            this.elementoCases = document.createElement("div") as HTMLElement
    
            this.elementoCases.style.opacity = "1"
    
            let containerGame = document.querySelector(".container-game") as HTMLElement
            containerGame?.appendChild(this.elementoCases)
    
            this.elementoCases?.classList.add("sobre-gamifica")
    
            this.elementoCases.innerHTML = `<h2>Empresa "EcoClean Solutions"</h2>
            <p>Antes uma tarefa tediosa e desinteressante, a coleta de lixo transformou-se em um jogo de estratégia e cooperação, graças à implementação ousada da gamificação. Cada residência recebeu uma "Missão Verde" personalizada, onde pontos eram ganhos não apenas pela quantidade de lixo reciclado, mas também pela redução do desperdício. Os moradores competiam amigavelmente para ver quem podia reciclar mais eficientemente, utilizando tecnologias inovadoras como sensores inteligentes que rastreavam e premiavam o esforço de cada família.`

            let actorEmpresaLixo = new Actor({
                pos: vec(this.engine.drawWidth - 300, this.engine.halfDrawHeight),
            })
    
            let EmpresalixoGamificacao = Resources.EmpresalixoGamificacao.toSprite()
    
            EmpresalixoGamificacao.scale = vec(0.1, 0.1)
    
            actorEmpresaLixo.graphics.add(EmpresalixoGamificacao)
            
            this.add(actorEmpresaLixo)
            
        }

        // Se for C
        if (this.objetoInteracao.nomeDoActor == "mesa_stand_c") {
            this.textoDaCena = "Essa é a descrição do case C"
            this.backgroundColor = Color.Gray

            this.elementoCases = document.createElement("div") as HTMLElement
    
            this.elementoCases.style.opacity = "1"
    
            let containerGame = document.querySelector(".container-game") as HTMLElement
            containerGame?.appendChild(this.elementoCases)
    
            this.elementoCases?.classList.add("sobre-gamifica")
        
            this.elementoCases.innerHTML = `<h2>Empresa "EcoCard"</h2>
            <p>Antes apenas uma fábrica comum, "EcoCard" se tornou um ícone de sustentabilidade e engajamento comunitário.
            A transformação começou com a criação do "Desafio EcoCard": uma competição entre equipes dentro da fábrica e com fornecedores externos para maximizar a reciclagem de papelão. Cada equipe foi designada para coletar, separar e reciclar o máximo possível de papelão, com pontos atribuídos não apenas pela quantidade, mas também pela qualidade do material reciclado.</p>`

            let actorEmpresaPapelao= new Actor({
                pos: vec(this.engine.drawWidth - 300, this.engine.halfDrawHeight),
            })
    
            let EmpresaPapelaoGamificacao = Resources.EmpresaPapelaoGamificacao.toSprite()
    
            EmpresaPapelaoGamificacao.scale = vec(0.5, 0.5)
    
            actorEmpresaPapelao.graphics.add(EmpresaPapelaoGamificacao)
            
            this.add(actorEmpresaPapelao)
        }
    }

    onInitialize(engine: Engine<any>): void {
        this.input.keyboard.on("press", (event) => {
            if (event.key == Keys.Esc) {
                engine.goToScene("exposicao")
            }
        })
    }

    onDeactivate(context: SceneActivationContext<undefined>): void {
        this.elementoCases?.remove()
        
        this.clear()
    }
    
}
