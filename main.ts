namespace showData{
    export function compass() {
        let deg = 2*Math.PI*(input.compassHeading()-90)/360;
        for (let index_x = -2; index_x <= 2; index_x++) {
            for (let index_y = -2; index_y <= 2; index_y++) {
                if(Math.abs(index_y-Math.tan(deg)*index_x)/Math.sqrt(1+Math.pow(Math.tan(deg),2))==0){
                    led.plotBrightness(2,2,255);
                }else{
                    led.plotBrightness(index_x+2, index_y+2, (255/4)/(Math.abs(index_y-Math.tan(deg)*index_x)/Math.sqrt(1+Math.pow(Math.tan(deg),2))));
                };
                if(Math.sign(index_x)==Math.sign(Math.cos(deg))){
                    led.plotBrightness(index_x+2, index_y+2, led.pointBrightness(index_x+2, index_y+2)*2);
                };
                if(Math.sign(index_y)==Math.sign(Math.sin(deg))){
                    led.plotBrightness(index_x+2, index_y+2, led.pointBrightness(index_x+2, index_y+2)*2);
                };
            };
        };
    };
    export function temperature(tmp_min?:number,tmp_max?:number){
        let tmp = input.temperature();
        for (let index_x = 0; index_x <= 4; index_x++) {
            for (let index_y = 0; index_y <= 4; index_y++) {
                led.plotBrightness(index_x, index_y, 255*((tmp-tmp_min)*25/(tmp_max-tmp_min)-(index_y*5+index_x)));
            };
        };
    };
};