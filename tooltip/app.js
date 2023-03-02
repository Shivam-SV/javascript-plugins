
        
window.onscroll = function(){
    //accessing the selector
    const tooltipSelector = '.tooltip';
    const psudoSelector = "::before";
    const tooltip = document.querySelector(tooltipSelector);
    
    // getting the window height and width
    let clientHeight = window.innerHeight;
    let clientWidth = window.innerWidth;
    
    // getting the height and width of selecotr
    let elementHeight = tooltip.clientHeight;
    let elementWidth = tooltip.clientWidth;
    let gapXAxisGap = 10;
    let gapYAxisGap = 15;
    
    // getting current offsets of the element
    let rectBoundings = tooltip.getBoundingClientRect();
    let topOffset = rectBoundings.top;
    let leftOffset = rectBoundings.left;

    // css selector for the before psudoe element
    let cssSelector = `${tooltipSelector}:hover${psudoSelector}`;
    let styleId = "custom-styles";
    let cssText = "";

    // calculating the exact offset to position the tooltip
    let tooltipXOffset = elementHeight + gapXAxisGap;
    let tooltipYOffset = (elementWidth / 2) + gapYAxisGap;
    if(topOffset > 100){
        cssText += `bottom: ${tooltipXOffset}px;`;
    }else{
        cssText += `top: ${tooltipXOffset}px;`;
    }
    if(leftOffset < 100){
        cssText += `left: ${tooltipYOffset}px;`;
    }else{
        cssText += `left: 0px;`;
    }

    cssText = `${cssSelector}{${cssText}}`;

    window.styles = document.getElementById(styleId)
    

    if(styles){
        styles.innerHTML = "";
    }else{                
        styles = document.createElement('style');
        styles.id = styleId;
        styles.type = "text/css";
        document.head.appendChild(styles);
    }

    if(styles.styleSheet){
        styles.styleSheet.cssText = cssText;
    }else{
        styles.appendChild(document.createTextNode(cssText));
    }
}