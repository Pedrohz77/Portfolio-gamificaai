import { Actor, Animation, CollisionType, Color, Engine, KeyEvent, Keys, SpriteSheet, Vector, vec } from "excalibur";
import { Resources } from "../resources";

export class player extends Actor {
    // Propriedades do player
    private velocidade: number = 180

    // Configuração do Player
    constructor(posicao: Vector) {
        super({
            pos: posicao,
            width: 32,
            height: 32,
            name: "Jogador",
            color: Color.Red,
            collisionType: CollisionType.Active
        })
    }

    onInitialize(engine: Engine<any>): void {
        // Ativar o modo de Debug
        // engine.toggleDebug()
        
        // Configurar sprite do player
        const PlayerSpritSheet = SpriteSheet.fromImageSource({
            image: Resources.PlayerSpritSheet,
            grid: {
                spriteWidth: 32,  // 16
                spriteHeight: 64, // 32
                columns: 56,
                rows: 20
            },
            spacing: {
                originOffset: {
                    y: 4     //8
                }
            }
        })

        let imagePlayer = PlayerSpritSheet.getSprite(3, 0)
        // imagePlayer.scale = vec(1.5, 1.5)

        this.graphics.add(imagePlayer)

        // Criar as animações
        const duracaoFrameAnimacao = 70
        // Animações Idle
        // Idle Esquerda
        const leftIdle = new Animation({
            frames: [
                { graphic: PlayerSpritSheet.getSprite(12, 1)},
                { graphic: PlayerSpritSheet.getSprite(13, 1)},
                { graphic: PlayerSpritSheet.getSprite(14, 1)},
                { graphic: PlayerSpritSheet.getSprite(15, 1)},
                { graphic: PlayerSpritSheet.getSprite(16, 1)},
                { graphic: PlayerSpritSheet.getSprite(17, 1)}
            ], 
            frameDuration: duracaoFrameAnimacao
        })
        this.graphics.add("left-idle", leftIdle)
        this.graphics.use("left-idle")

        const rightIdle = new Animation({
            frames: [
                { graphic: PlayerSpritSheet.getSprite(1, 1)},
                { graphic: PlayerSpritSheet.getSprite(2, 1)},
                { graphic: PlayerSpritSheet.getSprite(3, 1)},
                { graphic: PlayerSpritSheet.getSprite(4, 1)},
                { graphic: PlayerSpritSheet.getSprite(5, 1)},
                { graphic: PlayerSpritSheet.getSprite(6, 1)}
            ], 
                
            frameDuration: duracaoFrameAnimacao
        })
        this.graphics.add("right-idle", rightIdle)
        this.graphics.use("right-idle")


        // Configurar player para monitorar evento "hold" -> segurar tecla
        engine.input.keyboard.on("hold", (event) => {
            // Detectar qual tecla está pressionada
            switch (event.key) {
                case Keys.Left:
                case Keys.A:
                    // Mover para esquerda
                    // Define a velocidade x para negativa, que significa movimentar o player para a esquerda
                    this.vel.x = -this.velocidade
                    break;

                case Keys.Right:
                case Keys.D:
                    // Mover para direita
                    // Define a velocidade x para positiva, que significa movimentar o player para a direita
                    this.vel.x = this.velocidade
                    break;

                case Keys.Up:
                case Keys.W:
                    // Mover para cima
                    // Define a velocidade x para positiva, que significa movimentar o player para cima
                    this.vel.y = -this.velocidade
                    break;
                
                case Keys.Down:
                case Keys.S:
                    // Mover para baixo
                    // Define a velocidade x para positiva, que significa movimentar o player para baixo
                    this.vel.y = this.velocidade
                    break;

                default:
                    // Zera a velocidade do player, PARA a movimentação
                    this.vel.x = 0
                    this.vel.y = 0
                    
                    break;
            }
        })

        // Configura o player para monitorar evento "release" -> soltar
        engine.input.keyboard.on("release", (event) => {
            // Fazer o player parar ao soltar as teclas de movimentação
            // Parar movimentação lateral ao soltar as teclas de movimentação lateral
            if (
                event.key == Keys.A || 
                event.key == Keys.Left ||
                event.key == Keys.D ||
                event.key == Keys.Right
            ) {
                // Zerar velocidade horizontal
                this.vel.x = 0
            }

            // Parar movimentação vertical ao soltar as teclas de movimentação vertical
            if (
                event.key == Keys.W ||
                event.key == Keys.Up ||
                event.key == Keys.S ||
                event.key == Keys.Down
            ) {
                // Zerar velocidade vertical
                this.vel.y = 0
            }
        })
    }
}