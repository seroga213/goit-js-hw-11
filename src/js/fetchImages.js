export async function fetchImages(inputValue, pageNumber) {
    try {
      const response = await fetch(
        `https://pixabay.com/api/?key=29932087-e3b0323cc5403e154284061d7&q=${inputValue}&image_type=photo&orientation=horizontal&safesearch=true&page=${pageNumber}&per_page=40`
      );
      if (!response.ok) {
        throw new Error(response.status);
      } else {
        const data = await response.json();
        return data;
      }
    } catch (error) {
      console.error(error);
    }
  }