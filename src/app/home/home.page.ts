import {AfterViewInit, Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild} from '@angular/core';
import {DomController, IonContent, LoadingController, Platform} from "@ionic/angular";
import "@lottiefiles/lottie-player";


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  content: any;
  value = 0
  height = 0
  window:any;


  @ViewChild('bg') bg: ElementRef | undefined;
  @ViewChild('bride') bride: ElementRef | undefined;
  @ViewChild('groom') groom: ElementRef | undefined;
  @ViewChild('leafunder') leafunder: ElementRef | undefined;
  @ViewChild('flowerunder') flowerunder: ElementRef | undefined;
  @ViewChild('hill') hill: ElementRef | undefined;

  @ViewChild(IonContent) Icontent: IonContent | undefined;



  constructor(public renderer: Renderer2, public elementRef: ElementRef, public domCtrl: DomController, public platform: Platform,  public loadingCtrl: LoadingController) {
    this.platform.ready().then((value)=>{
      this.height = this.platform.height()
      console.log(this.height)
    })
  }

 async ngOnInit() {
    // await this.showLoading()
    this.content = this.elementRef.nativeElement
    this.domCtrl.read(() => {
      console.log('here')
      const height = this.bg?.nativeElement.clientHeight
    })
  }

  @HostListener('ionScroll', ['$event']) onContentScroll($event:any) {
    this.value = $event.detail.scrollTop

    console.log(this.value)
    const __groom: HTMLIonButtonElement = this.groom?.nativeElement;
    const __bride: HTMLIonButtonElement = this.bride?.nativeElement;
    const __leafunder: HTMLIonButtonElement = this.leafunder?.nativeElement;
    const __flowerunder: HTMLIonButtonElement = this.flowerunder?.nativeElement;
    const __bg: HTMLIonButtonElement = this.bg?.nativeElement;
    const __hill: HTMLIonButtonElement = this.hill?.nativeElement;

    if (this.value <= 60) {
      __groom.style.marginLeft = this.value * 1.2 + 'px'
      __bride.style.marginLeft =  - this.value * 1.2 +'px'
      __leafunder.style.marginTop = this.value * 0.8 + 'px'
      __flowerunder.style.marginTop = this.value * 2.5+ 'px'
      __bg.style.marginTop = -this.value * 0.5+ 'px'
      __hill.style.marginTop = -this.value * 0.2+ 'px'
    }

  }

  // async showLoading() {
  //   const loading = await this.loadingCtrl.create({
  //     message: 'Loading Please wait',
  //     mode: 'ios',
  //     duration: 5000,
  //   });
  //
  //   await loading.present();
  // }

  webView(){
    console.log('here calling')
    this.window = window.open('https://goo.gl/maps/yEC6zmWwP5vdcfQg7',
      '_system', 'location=yes');
    return false;
  }
}
