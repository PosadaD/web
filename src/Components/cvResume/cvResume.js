import {useEffect, useRef} from "react";
import "./cvResume.css"
import platformImg from "../../gameAssets/platform134.png"
import tubo1 from "../../gameAssets/tubo1.png"
import tubo2 from "../../gameAssets/tubo2.png"
import platform2Img from "../../gameAssets/platform2.png"
import backgroundImg from "../../gameAssets/background.png"
import misteryboximg from "../../gameAssets/misteryBox.png"
import blockimg from "../../gameAssets/block.png"
import block2img from "../../gameAssets/block2.png"
import block5img from "../../gameAssets/block5.png"
import ladder1img from "../../gameAssets/ladder1.png"
import ladder2img from "../../gameAssets/ladder2.png"
import ladder3img from "../../gameAssets/ladder3.png"
import ladder4img from "../../gameAssets/ladder4.png"
import ladder5img from "../../gameAssets/ladder5.png"
import ladder6img from "../../gameAssets/ladder6.png"
import ladder7img from "../../gameAssets/ladder7.png"
import spriteRunLeft from "../../gameAssets/Run-left-01.png"
import soriteRunRight from "../../gameAssets/Run-right-01.png"
import spriteStandLeft from "../../gameAssets/Idle-left-01.png"
import spriteStandRight from "../../gameAssets/Idle-rigth-01.png"
import playimg from "../../gameAssets/play.png"
//import misteryboxdoneimg from "../../gameAssets/misteryBoxDone.png"




function CvResume(){

    const canvasRef = useRef(null);


    useEffect(()=> {
        const canva = canvasRef.current;
        const canvas = document.getElementById("Mycanvas")
        const c = canva.getContext("2d");
        
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let lastKey;

        function createImage(imageSrc){
            const image = new Image();
            image.src = imageSrc
            return image
        }

        const gravity = 1.5;

        class Player{
            constructor(){
                this.position = {
                    x:100,
                    y:100
                }
                this.velocity = {
                    x: 0,
                    y: 0
                }
                this.width = 75;
                this.height = 105;

                this.image = createImage(spriteStandRight);
                this.frames = 0;
                this.sprites = {
                    stand: {
                        right: createImage(spriteStandRight),
                        left: createImage(spriteStandLeft),
                        cropWidth: 210,
                        width: 80,
                        frame:211.44
                    },
                    run: {
                        right: createImage(soriteRunRight),
                        left: createImage(spriteRunLeft),
                        cropWidth: 250,
                        width: 93.75,
                        frame:460.36
                    }
                }

                this.currentSprite = this.sprites.stand.right;
                this.currentCropWith = 210
                this.currentFrame = 211.44
            }
            draw(){
                c.drawImage(
                    this.currentSprite,
                    this.currentFrame * this.frames,
                    0,
                    this.currentCropWith,
                    310,
                    this.position.x, 
                    this.position.y, 
                    this.width, 
                    this.height
                    )
            }

            update(){
                this.frames++;

                if(this.frames > 40 && (this.currentSprite === this.sprites.stand.right || this.currentSprite === this.sprites.stand.left)){
                    this.frames=0
                }
                else if(this.frames > 29 && (this.currentSprite === this.sprites.run.right || this.currentSprite === this.sprites.run.left)){
                    this.frames=0
                }

                this.position.y += this.velocity.y;
                this.position.x += this.velocity.x;
                
                if(this.position.y + this.height + this.velocity.y <= canvas.height)
                this.velocity.y += gravity;
                else{
                    //this.velocity.y = 0;
                }
                if(this.position.y + this.height + this.velocity.y >= canvas.height - platformImg.height && this.position.x + this.width <= 600){
                    this.velocity.y = 0;
                }
                if(keys.right.pressed && player.position.x < 400){
                    player.velocity.x = 5;
                }
                else if(keys.left.pressed && player.position.x > 300){
                    player.velocity.x = -5;
                }                
                else{
                    player.velocity.x = 0;
                    if(keys.right.pressed){
                        scrollOffSet += 5;
                        platforms.forEach(platform => {
                            platform.position.x -= 5;
                        })
                        backgrounds.forEach(background => {
                            background.position.x -= 5;
                        })
                        tubos.forEach(tubo => {
                            tubo.position.x -=5;
                        })
                        misteryboxes.forEach(misterybox => {
                            misterybox.position.x -= 5;
                        })
                        blocks.forEach(block => {
                            block.position.x -= 5;
                        })
                        ladders.forEach(ladder => {
                            ladder.position.x -= 5;
                        })
                    }
                    else if(keys.left.pressed){
                        scrollOffSet -= 5;
                        platforms.forEach(platform => {
                            platform.position.x += 5;
                        })
                        backgrounds.forEach(background => {
                            background.position.x += 5;
                        })
                        tubos.forEach(tubo => {
                            tubo.position.x +=5;
                        })
                        misteryboxes.forEach(misterybox => {
                            misterybox.position.x += 5;
                        })
                        blocks.forEach(block => {
                            block.position.x += 5;
                        })
                        ladders.forEach(ladder => {
                            ladder.position.x += 5;
                        })
                    }
                }
                this.draw();
            }
        }

        class Platform {
            constructor({x, y, image}){
                this.position = {
                    x,
                    y
                }
                this.image = image;
                this.width = image.width;
                this.height = image.height;
            }
            draw(){
                c.drawImage(this.image, this.position.x, this.position.y)

                platforms.forEach(platform => {
                if(player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width){
                    player.velocity.y = 0;
                }
                })
            }
        }

        const player = new Player();
        let scrollOffSet = 0;

        const keys = {
            right : {
                pressed: false
            },
            left : {
                pressed: false
            },
            up : {
                pressed: false
            }
        }

        canvas.addEventListener("keydown", ({keyCode}) => {
            switch(keyCode){
                case 65:
                    keys.left.pressed = true;
                    lastKey = 'left';
                    break;
                
                case 83:
                    break;

                case 68:
                    keys.right.pressed = true;
                    lastKey = 'right';
                    break;

                case 87 :
                    player.velocity.y = -30;
                    //keys.up.pressed = true;
                    break;
                default:
            }
        })

        canvas.addEventListener("keyup", ({keyCode}) => {
            switch(keyCode){
                case 65:
                    keys.left.pressed = false;
                    break;
                
                case 83:
                    break;

                case 68:
                    keys.right.pressed = false;
                    break;

                case 87:
                    keys.up.pressed = false;
                    break;
                default:
            }
        })


        class tubo {
            constructor({x, y, image}){
                this.position = {
                    x,
                    y
                }
                this.image = image;
                this.width = image.width;
                this.height = image.height;
            }
            draw(){
                c.drawImage(this.image, this.position.x, this.position.y)

                tubos.forEach(tubo => {
                if(player.position.y + player.height <= tubo.position.y && player.position.y + player.height + player.velocity.y >= tubo.position.y && player.position.x + player.width - 10 >= tubo.position.x && player.position.x <= tubo.position.x + tubo.width){
                    player.velocity.y = 0;
                }
                else if(player.position.x + player.width - 10 <= tubo.position.x && player.position.x + player.width >= tubo.position.x && player.position.y + player.height > tubo.position.y){
                    keys.right.pressed = false;
                }
                else if(player.position.x + 5 >= tubo.position.x + tubo.width && player.position.x <= tubo.position.x + tubo.width && player.position.y + player.height > tubo.position.y){
                    keys.left.pressed = false;
                }
                })
            } 
        }

        class ladder {
            constructor({x, y, image}){
                this.position = {
                    x,
                    y
                }
                this.image = image;
                this.width = image.width;
                this.height = image.height;
            }
            draw(){
                c.drawImage(this.image, this.position.x, this.position.y)

                ladders.forEach(ladder => {
                if(player.position.y + player.height <= ladder.position.y && player.position.y + player.height + player.velocity.y >= ladder.position.y && player.position.x + player.width - 10 >= ladder.position.x && player.position.x <= ladder.position.x + ladder.width){
                    player.velocity.y = 0;
                }
                else if(player.position.x + player.width - 5 <= ladder.position.x + 5 && player.position.x + player.width >= ladder.position.x && player.position.y + player.height > ladder.position.y){
                    keys.right.pressed = false;
                }
                else if(player.position.x + 5 >= ladder.position.x + ladder.width - 5 && player.position.x <= ladder.position.x + ladder.width && player.position.y + player.height > ladder.position.y){
                    keys.left.pressed = false;
                }
                })
            } 
        }

        class misterybox {
            constructor({x, y, image}){
                this.position = {
                    x,
                    y
                }
                this.image = image;
                this.width = image.width;
                this.height = image.height;
            }
            draw(){
                c.drawImage(this.image, this.position.x, this.position.y)

                misteryboxes.forEach(misterybox => {
                if(player.position.y + player.height <= misterybox.position.y && player.position.y + player.height + player.velocity.y >= misterybox.position.y && player.position.x + player.width >= misterybox.position.x && player.position.x <= misterybox.position.x + misterybox.width){
                    player.velocity.y = 0;
                }
                else if(player.position.y + 30 >= misterybox.position.y + misterybox.height && player.position.y <= misterybox.position.y + misterybox.height && player.position.x + player.width >= misterybox.position.x + 10 && player.position.x <= misterybox.position.x + misterybox.width - 10){
                    player.velocity.y = 0;
                    player.velocity.y += gravity;
                    //this.image = createImage(misteryboxdoneimg);
                }
                else if(player.position.x + player.width - 5 <= misterybox.position.x && player.position.x + player.width >= misterybox.position.x && player.position.y + player.height > misterybox.position.y && player.position.y < misterybox.position.y + misterybox.height){
                    keys.right.pressed = false;
                }
                else if(player.position.x + 10 >= misterybox.position.x + misterybox.width && player.position.x <= misterybox.position.x + misterybox.width && player.position.y + player.height > misterybox.position.y && player.position.y < misterybox.position.y + misterybox.height){
                    keys.left.pressed = false;
                }
                })
            } 
        }

        class block {
            constructor({x, y, image}){
                this.position = {
                    x,
                    y
                }
                this.image = image;
                this.width = image.width;
                this.height = image.height;
            }
            draw(){
                c.drawImage(this.image, this.position.x, this.position.y)

                blocks.forEach(block => {
                if(player.position.y + player.height <= block.position.y && player.position.y + player.height + player.velocity.y >= block.position.y && player.position.x + player.width >= block.position.x && player.position.x <= block.position.x + block.width){
                    player.velocity.y = 0;
                }
                else if(player.position.y + 30 >= block.position.y + block.height && player.position.y <= block.position.y + block.height && player.position.x + player.width >= block.position.x + 10 && player.position.x <= block.position.x + block.width - 10){
                    player.velocity.y = 0;
                    player.velocity.y += gravity;
                }
                else if(player.position.x + player.width - 5 <= block.position.x && player.position.x + player.width >= block.position.x && player.position.y + player.height > block.position.y && player.position.y < block.position.y + block.height){
                    keys.right.pressed = false;
                }
                else if(player.position.x + 10 >= block.position.x + block.width && player.position.x <= block.position.x + block.width && player.position.y + player.height > block.position.y && player.position.y < block.position.y + block.height){
                    keys.left.pressed = false;
                }
                })
            } 
        }


        class play {
            constructor({x, y, image}){
                this.position = {
                    x,
                    y
                }
                this.image = image;
                this.width = canvas.width;
                this.height = image.height;
            }
            draw(){
                c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
            }
        }

        class background {
            constructor({x, y, image}){
                this.position = {
                    x,
                    y
                }
                this.image = image;
                this.width = image.width;
                this.height = image.height;
            }
            draw(){
                if(this.image){
                    c.drawImage(this.image, this.position.x, this.position.y)
                    
                    backgrounds.forEach(background => {
                        if(player.position.x === background.position.x + 5){
                            keys.left.pressed = false;
                        }
                        else if(player.position.x + 5 === background.position.x + background.width){
                            keys.right.pressed = false;
                        }
                    })
                }
            }
        }


        const backgrounds = [
            new background({
                x: 0,
                y: canvas.height - 1324,
                image: createImage(backgroundImg) 
            })
        ]

        const plays = [
            new play({
                x: 0,
                y: (canvas.height - 952)/2,
                image: createImage(playimg) 
            })
        ]

        const tubos = [
            new tubo({
                x: 2035,
                y:canvas.height - 265,
                image : createImage(tubo1)
            }),
            new tubo({
                x: 2565,
                y:canvas.height - 265,
                image : createImage(tubo1)
            }),
            new tubo({
                x: 3110,
                y:canvas.height - 335,
                image : createImage(tubo2)
            }),
            new tubo({
                x: 3680,
                y:canvas.height - 335,
                image : createImage(tubo2)
            }),
            new tubo({
                x: 6575,
                y:canvas.height - 265,
                image : createImage(tubo1)
            }),
            new tubo({
                x: 6700,
                y:canvas.height - 265,
                image : createImage(tubo1)
            }),
            new tubo({
                x: 6825,
                y:canvas.height - 265,
                image : createImage(tubo1)
            }),
            new tubo({
                x: 6950,
                y:canvas.height - 265,
                image : createImage(tubo1)
            })
        ]

        const misteryboxes = [
            new misterybox({
                x: 1415,
                y: canvas.height - 370,
                image: createImage(misteryboximg)
            }),
            new misterybox({
                x: 1670,
                y: canvas.height - 370,
                image: createImage(misteryboximg)
            }),
            new misterybox({
                x: 1790,
                y: canvas.height - 370,
                image: createImage(misteryboximg)
            }),
            new misterybox({
                x: 1730,
                y: canvas.height - 590,
                image: createImage(misteryboximg)
            }),
            new misterybox({
                x: 4465,
                y: canvas.height - 370,
                image: createImage(misteryboximg)
            }),
            new misterybox({
                x: 5115,
                y: canvas.height - 540,
                image: createImage(misteryboximg)
            }),
            new misterybox({
                x: 5740,
                y: canvas.height - 370,
                image: createImage(misteryboximg)
            }),
            new misterybox({
                x: 5930,
                y: canvas.height - 370,
                image: createImage(misteryboximg)
            }),
            new misterybox({
                x: 6110,
                y: canvas.height - 370,
                image: createImage(misteryboximg)
            }),
            new misterybox({
                x: 5930,
                y: canvas.height - 590,
                image: createImage(misteryboximg)
            }),
            new misterybox({
                x: 9620,
                y: canvas.height - 370,
                image: createImage(misteryboximg)
            }),
            new misterybox({
                x: 9870,
                y: canvas.height - 370,
                image: createImage(misteryboximg)
            }),
            new misterybox({
                x: 9990,
                y: canvas.height - 370,
                image: createImage(misteryboximg)
            }),
            new misterybox({
                x: 9930,
                y: canvas.height - 590,
                image: createImage(misteryboximg)
            }),
            new misterybox({
                x: 10770,
                y: canvas.height - 370,
                image: createImage(misteryboximg)
            })
        ]

        const blocks = [
            new block({
                x: 1610,
                y: canvas.height - 370,
                image: createImage(blockimg)
            }),
            new block({
                x: 1730,
                y: canvas.height - 370,
                image: createImage(blockimg)
            }),
            new block({
                x: 1850,
                y: canvas.height - 370,
                image: createImage(blockimg)
            }),
            new block({
                x: 4405,
                y: canvas.height - 370,
                image: createImage(blockimg)
            }),
            new block({
                x: 4525,
                y: canvas.height - 370,
                image: createImage(blockimg)
            }),
            new block({
                x: 4585,
                y: canvas.height - 540,
                image: createImage(block5img)
            }),
            new block({
                x: 4995,
                y: canvas.height - 540,
                image: createImage(block2img)
            }),
            new block({
                x: 5280,
                y: canvas.height - 370,
                image: createImage(block2img)
            }),
            new block({
                x: 9810,
                y: canvas.height - 370,
                image: createImage(blockimg)
            }),
            new block({
                x: 9930,
                y: canvas.height - 370,
                image: createImage(blockimg)
            }),
            new block({
                x: 10050,
                y: canvas.height - 370,
                image: createImage(blockimg)
            }),
            new block({
                x: 10240,
                y: canvas.height - 370,
                image: createImage(block5img)
            }),
            new block({
                x: 10650,
                y: canvas.height - 370,
                image: createImage(block2img)
            }),
        ]

        const ladders = [
            new ladder({
                x: 7585,
                y: canvas.height - 177,
                image: createImage(ladder1img)
            }),
            new ladder({
                x: 7635,
                y: canvas.height - 229,
                image: createImage(ladder2img)
            }),
            new ladder({
                x: 7689,
                y: canvas.height - 281,
                image: createImage(ladder3img)
            }),
            new ladder({
                x: 7742,
                y: canvas.height - 333,
                image: createImage(ladder4img)
            }),
            new ladder({
                x: 7915,
                y: canvas.height - 333,
                image: createImage(ladder4img)
            }),
            new ladder({
                x: 7965,
                y: canvas.height - 281,
                image: createImage(ladder3img)
            }),
            new ladder({
                x: 8015,
                y: canvas.height - 229,
                image: createImage(ladder2img)
            }),
            new ladder({
                x: 8055,
                y: canvas.height - 177,
                image: createImage(ladder1img)
            }),

            // second part
            new ladder({
                x: 8705,
                y: canvas.height - 177,
                image: createImage(ladder1img)
            }),
            new ladder({
                x: 8755,
                y: canvas.height - 229,
                image: createImage(ladder2img)
            }),
            new ladder({
                x: 8805,
                y: canvas.height - 281,
                image: createImage(ladder3img)
            }),
            new ladder({
                x: 8855,
                y: canvas.height - 333,
                image: createImage(ladder4img)
            }),
            new ladder({
                x: 8905,
                y: canvas.height - 385,
                image: createImage(ladder5img)
            }),
            new ladder({
                x: 9135,
                y: canvas.height - 385,
                image: createImage(ladder5img)
            }),
            new ladder({
                x: 9185,
                y: canvas.height - 333,
                image: createImage(ladder4img)
            }),
            new ladder({
                x: 9235,
                y: canvas.height - 281,
                image: createImage(ladder3img)
            }),
            new ladder({
                x: 9285,
                y: canvas.height - 229,
                image: createImage(ladder2img)
            }),
            new ladder({
                x: 9325,
                y: canvas.height - 177,
                image: createImage(ladder1img)
            }),

            // third part
            new ladder({
                x: 11060,
                y: canvas.height - 177,
                image: createImage(ladder1img)
            }),
            new ladder({
                x: 11110,
                y: canvas.height - 229,
                image: createImage(ladder2img)
            }),
            new ladder({
                x: 11160,
                y: canvas.height - 281,
                image: createImage(ladder3img)
            }),
            new ladder({
                x: 11210,
                y: canvas.height - 333,
                image: createImage(ladder4img)
            }),
            new ladder({
                x: 11260,
                y: canvas.height - 385,
                image: createImage(ladder5img)
            }),
            new ladder({
                x: 11310,
                y: canvas.height - 437,
                image: createImage(ladder6img)
            }),
            new ladder({
                x: 11360,
                y: canvas.height - 489,
                image: createImage(ladder7img)
            })

        ]

        const platforms = [
            new Platform({
                x: 0,
                y:canvas.height - 125,
                image : createImage(platformImg)
            }),
            new Platform({
                x: 4170,
                y:canvas.height - 125,
                image : createImage(platform2Img)
            }),
            new Platform({
                x: 4900,
                y:canvas.height - 125,
                image : createImage(platformImg)
            }),
            new Platform({
                x: 9135,
                y:canvas.height - 125,
                image : createImage(platformImg)
            })
        ]

        function animate(){
            requestAnimationFrame(animate);
            c.clearRect(0, 0, canvas.width, canvas.height);

            backgrounds.forEach(background => {
                background.draw();
            })

            platforms.forEach(platform => {
                platform.draw();
            })

            // win condition 
            if(scrollOffSet > 2000){
                
            }

            tubos.forEach(tubo => {
                tubo.draw();
            })

            misteryboxes.forEach(misterybox => {
                misterybox.draw();
            })

            blocks.forEach(block => {
                block.draw();
            })

            ladders.forEach(ladder => {
                ladder.draw();
            })

            if(!keys.left.pressed && lastKey === 'left' && player.currentSprite !== player.sprites.stand.left){
                player.currentSprite = player.sprites.stand.left;
                player.currentCropWith = player.sprites.stand.cropWidth;
                player.currentFrame = player.sprites.stand.frame;
                player.width = player.sprites.stand.width;
            }else if(!keys.right.pressed && lastKey === 'right' && player.currentSprite !== player.sprites.stand.right){
                player.currentSprite = player.sprites.stand.right;
                player.currentCropWith = player.sprites.stand.cropWidth;
                player.currentFrame = player.sprites.stand.frame;
                player.width = player.sprites.stand.width
            }
            else if( keys.right.pressed && lastKey === 'right' && player.currentSprite !== player.sprites.run.right){
                player.frames = 1
                player.currentSprite = player.sprites.run.right;
                player.currentCropWith =player.sprites.run.cropWidth;
                player.currentFrame = player.sprites.run.frame;
                player.width = player.sprites.run.width;
            } else if(keys.left.pressed && lastKey === 'left' && player.currentSprite !== player.sprites.run.left){
                player.currentSprite = player.sprites.run.left;
                player.currentCropWith = player.sprites.run.cropWidth;
                player.currentFrame = player.sprites.run.frame;
                player.width = player.sprites.run.width;
            }

            // lose condition
            if(player.position.y>canvas.height){
                player.position.x = 50;
                player.position.y = 200;
            }
            player.update();
        }

        function animateplay(){
            // window.addEventListener("load", function(){
            //     plays.forEach(play => {
            //         play.draw();
            //     })
            // })
            c.clearRect(0, 0, canvas.width, canvas.height);
            
            plays.forEach(play => {
                play.draw();
            })
        }
    

        canvas.addEventListener('load', function(){
            animateplay();
        })
        // animateplay();
        canvas.addEventListener("click", function(){
            c.clearRect(0, 0, canvas.width, canvas.height);

                // const text = "prueba se hace";
                // c.strokeText(text, 100, 200);
            animate();
        })


    },[]);


    return(
        <section className="cvContainer">
            <img src={playimg} alt=""></img>
            <canvas ref={canvasRef} tabIndex="1" id="Mycanvas"></canvas>
        </section>
    )
    
} 

export default CvResume;


