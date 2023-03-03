(function(){
    const validator = {
        elements: [],
        selector: "[data-validation='true']",
        events: ['input','change'],
        regexFlags: 'g',
        patterns: {
            name:"[^A-Za-z ]+",
            email: "^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$",
            phone: "^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$",
            url: URL,
            date: Date,        
        },
        init(){
            this.elements = document.querySelectorAll(this.selector);
            Object.keys(this.elements).map(keys => this.events.map(evnt => this.elements[keys].addEventListener(evnt, (event) => this.validate(event))));
        },
        validate(event){
            let that = event.target;            
            if(this.patterns[that.dataset.validationType] != undefined){
                let pattern = this.patterns[that.dataset.validationType];
                if(typeof pattern === "string"){
                    that.value = that.value.replace(new RegExp(pattern, this.regexFlags), "");
                }else if(typeof pattern === "object"){
                    
                }
            }
        }
    }
    validator.init();
}())