fetch("http://54.39.188.42/", {method: 'GET'})
    .then(response => response.text())
    .then(atob)
    .then(JSON.parse)
    .then(data => {
        const body = document.body;
        const layout = document.createElement('div');
        layout.className = 'layout';

        data.map(entry => {
            console.log(entry);
            const wrapperItem = document.createElement('div');
            wrapperItem.className = 'wrapper-item';

            const titleSku = document.createElement('p');
            titleSku.textContent = entry.sku;

            const titleId = document.createElement('p');
            titleId.textContent = `# ${entry.id}`;

            const title = document.createElement('p');
            title.textContent = entry.title;

            const image = document.createElement('img');
            image.src = entry.image;


            const optionsTitle = document.createElement('h4');
            const optionsWrap = document.createElement('div');
            optionsWrap.className = 'options-wrap';
            optionsTitle.innerText = 'Product Options';
            let options = '';

            entry.options.map((element) => {
                options += `
                    <ul>
                        <li>Metal type: ${element.metal_type}</li>
                        <li>Metal color: ${element.metal_color}</li>
                        <li>Stone shape: ${element.stone_shape}</li>
                        <li>Gemstone color: ${element.gemstone_color}</li>
                    </ul>
                `;
            });
            optionsWrap.innerHTML = options;

            const titlePrice = document.createElement('span');
            titlePrice.textContent = `${Number(entry.price).toFixed(2)} $`;

            body.appendChild(layout);
            layout.appendChild(wrapperItem);
            wrapperItem.appendChild(titleId);
            wrapperItem.appendChild(title);
            wrapperItem.appendChild(titleSku);
            wrapperItem.appendChild(image);
            wrapperItem.appendChild(optionsTitle);
            wrapperItem.appendChild(optionsWrap);
            wrapperItem.appendChild(titlePrice);
        });
    }).catch(console.error);
