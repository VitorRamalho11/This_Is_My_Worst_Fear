async function searchFear() {
    const fear = document.getElementById('fearInput').value;
    if (!fear) {
        alert("Por favor, digite seu medo!");
        return;
    }

    // Sua chave de API e o ID do Custom Search Engine
    const apiKey = 'SUA_CHAVE_DE_API_AQUI';
    const cx = 'SEU_ID_DO_CUSTOM_SEARCH_AQUI';
    const url = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(fear)}&cx=${cx}&key=${apiKey}&searchType=image`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.items && data.items.length > 0) {
            const imageUrl = data.items[0].link; // Pega a primeira imagem
            const imageElement = `<img src="${imageUrl}" alt="${fear}" id="imageResult">`;
            document.getElementById('imageResult').innerHTML = imageElement;
        } else {
            document.getElementById('imageResult').innerHTML = "Nenhuma imagem encontrada!";
        }
    } catch (error) {
        console.error("Erro ao buscar imagem:", error);
        document.getElementById('imageResult').innerHTML = "Erro ao buscar imagem. Tente novamente!";
    }
}
