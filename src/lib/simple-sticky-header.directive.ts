import { Directive, ElementRef, HostBinding, NgZone } from '@angular/core';

@Directive({
    selector: '[simpleStickyHeader]',
    standalone: true
})
export class SimpleStickyHeaderDirective {
    private elementRef: ElementRef;
    private observer: IntersectionObserver | null;
    private zone: NgZone;

    @HostBinding('style.position')
    position: string = 'sticky';

    @HostBinding('style.top')
    top: string = '-1px';

    constructor(elementRef: ElementRef, zone: NgZone) {
        this.elementRef = elementRef;
        this.zone = zone;
        this.observer = null;
    }

    public ngOnDestroy(): void {
        this.observer?.unobserve(this.elementRef.nativeElement);
        this.observer = null;
    }

    public ngOnInit(): void {
        this.zone.runOutsideAngular(() => {
            this.observer = new window.IntersectionObserver(this.handleIntersection, {
                root: null, // Sets the framing element to the viewport
                rootMargin: "0px",
                threshold: [0, 0.95, 1]
            });
            this.observer.observe(this.elementRef.nativeElement);
        });
    }

    private handleIntersection = (entries: IntersectionObserverEntry[]) => {
        for (let entry of entries) {
            if (entry.boundingClientRect.top < 1
                && entry.boundingClientRect.bottom > 0
            ) {
                this.elementRef.nativeElement.classList.add('pinned');
            } else {
                this.elementRef.nativeElement.classList.remove('pinned');
            }
        }
    }

}
