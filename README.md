# Shortly

This is a solution to the [Shortly URL shortening API Challenge challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Overview

Created in desktop view with mobile friendly support for Samsung s9+(personal phone)

### Screenshot

![Desktop Top](https://github.com/primelos/URL_shortening_API/blob/main/public/images/desktop_top.png)
![Desktop Bottom](https://github.com/primelos/URL_shortening_API/blob/main/public/images/desktop_bottom.png)
![Mobile Top](https://github.com/primelos/URL_shortening_API/blob/main/public/images/mobile_top.png)
![Mobile Middle](https://github.com/primelos/URL_shortening_API/blob/main/public/images/mobile_middle.png)
![Mobile Line](https://github.com/primelos/URL_shortening_API/blob/main/public/images/mobile_line.png)

### Links

- Solution URL: [Github Repo](https://github.com/primelos/URL_shortening_API)
- Live Site URL: [Live Demo](https://url-shortening-api-murex.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- Desktop-first workflow
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles
- Axios
- React Icons
- npm i uuid -> unique ids

### What I learned

This was a fun project there was a little of everything. I ran into a few problems but I found a solution for each one. I decide to build it from desktop to mobile view. I feel I made a mistake placing the search component on the page but I used css to cover up my mistakes. I used two reusable buttons. I also spent more time on the svg icons than I would have like to, I couldn't get the hover color to work. I learned a different way of implementing localStorage from a way I've done it before.

```
  const useLocalStorage = () => {
    const [storedValue, setStoredValue] = useState(() => {
      try {
        const item = window.localStorage.getItem("saved");
        return item ? JSON.parse(item) : [];
      } catch (error) {
        console.log("error", error);
      }
    });

    const setValue = (value) => {
      try {
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;
        setStoredValue(valueToStore);
        window.localStorage.setItem("saved", JSON.stringify(valueToStore));
      } catch (error) {
        console.log("error", error);
      }
    };
    return [storedValue, setValue];
  };
```

I created a copy button for the first time using the code below

```
let copyLink = await navigator.clipboard.writeText(e.urlShort);

```

### Useful resources

- [Stack Overflow](https://stackoverflow.com/) - This helped me solve most of my problems, from other developers who have faced the same challenges in the past.

## Author

- Website - [Carlos Venegas](https://carlosfvenegas.com/)
- Frontend Mentor - [@primelos](https://www.frontendmentor.io/profile/primelos)
- Twitter - [@primelos](https://www.twitter.com/primelos)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
