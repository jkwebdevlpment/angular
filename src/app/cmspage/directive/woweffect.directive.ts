import { Directive , ElementRef ,Renderer } from "@angular/core";

@Directive({
    selector : '[woweffect]',
    host : {
        '(focus)': 'iFocus()',
        '(blur)': 'iBlur()'
    }
})
export  class WoweffectDirective{

    constructor( private elementRef : ElementRef , private renderer : Renderer ){
        this.renderer.setElementStyle(this.elementRef.nativeElement , 'border', '2px solid green')

    }
    iFocus(){
        this.renderer.setElementStyle(this.elementRef.nativeElement , 'width' , '500px')
        this.renderer.setElementStyle(this.elementRef.nativeElement, 'transition', 'all 0.5s ease')
    }
    iBlur() {
        this.renderer.setElementStyle(this.elementRef.nativeElement, 'width', '300px')
        this.renderer.setElementStyle(this.elementRef.nativeElement, 'transition', 'all 0.5s ease')
    }

}