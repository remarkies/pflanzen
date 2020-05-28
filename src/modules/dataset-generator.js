let functions = {
    createImage(path, width) {
        return { path: path, width: width}
    },
    createVideo(path, width, ratio) {
        return { path: path, width: width, ratio: ratio}
    },
    createRow(images) {
        return { images: images };
    },
    createImageSet(text, isConnector, rows) {
        let imageSet = {
            text: text,
            isConnector: isConnector,
            rows: []
        };

        for(let i = 0; i < rows.length; i++) {
            imageSet.rows.push({
                id: i,
                images: rows[i].images
            });
        }
        return imageSet;
    },
    createArticle(title, description, imageSets) {
        let article = {
            title: title,
            description: description,
            imageSets : []
        };

        for(let i = 0; i < imageSets.length; i++) {
            article.imageSets.push({
                id: i,
                text: imageSets[i].text,
                isConnector: imageSets[i].isConnector,
                rows: imageSets[i].rows
            });
        }
        return article;
    }
}

export default functions;