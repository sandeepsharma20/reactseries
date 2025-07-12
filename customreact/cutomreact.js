 function customRender(reactElement,container){
    const domElement=document.createElement(reactElement.type) // this gives anchor tag name 'a'
    domElement.innerHTML=reactElement.children
    // domElement.setAttribute('href',reactElement.props.href)
    // container.appendChild(domElement)
    // change the code we use loop based syntax because of many properties
    for(const prop in reactElement.props){
        if(prop=='children')continue;
        domElement.setAttribute(prop,reactElement.props[prop])
        container.appendChild(domElement)
    }
 }
 
 
 
 
 
 const reactElement={
    type:'a',//anchor tag
    props:{
        href:"https://www.google.com/",
        target:'_blank'
    },
    children:'Click me to visit google'
 }

 const maincontainer=document.querySelector('#root')
 customRender(reactElement,maincontainer)

