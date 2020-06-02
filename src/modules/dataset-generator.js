const functions = {
  createImage(path, width) {
    return { path, width };
  },

  createVideo(path, width, ratio) {
    return { path, width, ratio };
  },

  createRow(images) {
    return { images };
  },

  createImageSet(text, isConnector, rows, additionalDescription = '') {
    const imageSet = {
      text,
      additionalDescription,
      isConnector,
      rows: [],
    };

    for (let i = 0; i < rows.length; i++) {
      imageSet.rows.push({
        id: i,
        images: rows[i].images,
      });
    }
    return imageSet;
  },

  createArticle(title, description, imageSets, id = '') {
    const article = {
      id,
      title,
      description,
      imageSets: [],
    };

    for (let i = 0; i < imageSets.length; i++) {
      article.imageSets.push({
        id: i,
        text: imageSets[i].text,
        additionalDescription: imageSets[i].additionalDescription,
        isConnector: imageSets[i].isConnector,
        rows: imageSets[i].rows,
      });
    }
    return article;
  },
};

export default functions;
