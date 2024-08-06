import portfolioView from '../view/portfolioView.js';
import portfolioService from '../service/portfolioService.js';

export async function init(){
    const repo = await portfolioService.getRepo();
    console.log(repo);
    portfolioView.render(repo);
}