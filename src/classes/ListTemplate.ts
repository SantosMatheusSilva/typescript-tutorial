import { HasFortmatter } from "../Interfaces/HasFormatter.js";

export class ListTemplate {
    constructor(private container: HTMLUListElement) {} // when using a modiffier in front of the property in the construstor 
                                                        // it automatically assinigs  this argument as a prooperty in this instace. So theres no need to declare it elsewhere out the constructor.
                                                    
    render(item: HasFortmatter, heading: string, pos: 'start' | 'end'){
        const li = document.createElement('li');

        const h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);

        const p = document.createElement('p');
        p.innerText = item.format();
        li.append(p);

        if (pos === 'start') {
            this.container.prepend(li);
        } else {
            this.container.append(li);
        } 
    }
}