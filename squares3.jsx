#target illustrator

function createSquare(x, y, width, height) {
    var doc = app.activeDocument;
    var square = doc.pathItems.rectangle(y, x, width, height);
    square.fillColor = new RGBColor();
    square.fillColor.red = 0;
    square.fillColor.green = 0;
    square.fillColor.blue = 0;
    return square;
}

function main() {
    if (app.documents.length === 0) {
        alert('Please open a document before running the script.');
        return;
    }

    var doc = app.activeDocument;
    var artboard = doc.artboards[doc.artboards.getActiveArtboardIndex()];
    var artboardBounds = artboard.artboardRect;
    var sizeInInches = 0.25;
    var sizeInPoints = sizeInInches * 72; // 1 inch = 72 points

    // Top-left corner
    createSquare(artboardBounds[0], artboardBounds[1] - sizeInPoints, sizeInPoints, -sizeInPoints);

    // Top-right corner
    createSquare(artboardBounds[2] - sizeInPoints, artboardBounds[1] - sizeInPoints, sizeInPoints, -sizeInPoints);

    // Bottom-left corner
    createSquare(artboardBounds[0], artboardBounds[3], sizeInPoints, -sizeInPoints);

    // Bottom-right corner
    createSquare(artboardBounds[2] - sizeInPoints, artboardBounds[3], sizeInPoints, -sizeInPoints);
}

main();
