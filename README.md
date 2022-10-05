# Boston Marathon Hotels

Boston marathon hotels are expensive. However, [Marathon Tours](https://www.marathontours.com/) has some great rates.
The problem is that most of the time hotels sell out quickly on this website. 
This automation polls the website to lists the available hotels and emails you when a hotel is available.

## How this works

Originally I was planning to build a simple webscraper to find the hotels. However, the website uses 
cookies that I wasn't able to easy reverse engineer. Therefore, I decided to go the route of automating
the process using browser automation. In this case I chose [Cypress](https://www.cypress.io/) since I was
already familiar with the tool.

The browser automation will launch a headless browser and navigate to the website, fill in the contents 
and then list the available hotels. The automation is run on a schedule by using [Github Actions](https://github.com/features/actions)

## Running locally

Generally speaking you would not need to run this locally unless you are developing the automation. 

1. `nvm use`
2. `npm install`
3. `npm test`
