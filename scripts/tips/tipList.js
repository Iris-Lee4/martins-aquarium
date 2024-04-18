import { getTips } from '../database.js';

export const tipList = () => {
    const tips = getTips();
    let tipString = '<h2>Martin\'s Fish Tips</h2><div class="tipList"><ul>'
    for (const tip of tips) {
        tipString += `<li>${tip.tip}</li>`
    }
    tipString += `</ul></div>`
    return tipString
}