#target illustrator

function createLine(x1, y1, x2, y2) {
    var doc = app.activeDocument;
    var line = doc.pathItems.add();
    line.setEntirePath([[x1, y1], [x2, y2]]);
    line.strokeColor = new RGBColor();
    line.strokeColor.red = 255;
    line.strokeColor.green = 0;
    line.strokeColor.blue = 255;
    line.strokeWidth = 1;
    return line;
}

function main() {
    if (app.documents.length === 0) {
        alert('Please open a document before running the script.');
        return;
    }

    var doc = app.activeDocument;
    var artboard = doc.artboards[doc.artboards.getActiveArtboardIndex()];
    var artboardBounds = artboard.artboardRect;
    var lengthInInches = 0.25;
    var lengthInPoints = lengthInInches * 72; // 1 inch = 72 points

    // Create a vertical magenta line starting at the top-left corner of the artboard
    createLine(artboardBounds[0], artboardBounds[1], artboardBounds[0], artboardBounds[1] - lengthInPoints);

    // Create a vertical magenta line starting at the top-right corner of the artboard
    createLine(artboardBounds[2], artboardBounds[1], artboardBounds[2], artboardBounds[1] - lengthInPoints);

    // Create a vertical magenta line starting at the bottom-left corner of the artboard
    createLine(artboardBounds[0], artboardBounds[3], artboardBounds[0], artboardBounds[3] + lengthInPoints);
}

main();
