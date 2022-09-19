const solutionDiv = document.getElementById("solution")

function triggerSolution(){
    // Getting values
    const gradient = parseFloat(document.getElementById("gradient").value)
    const yIntercept = parseFloat(document.getElementById("y-intercept").value)

    // Solution DOM
    const solutionText = document.getElementById("solution-text")

    // Extra validation
    if (isNaN(gradient) || isNaN(yIntercept)) {
        solutionDiv.style.display = "none";
        return;
    }

    // A can't be 0
    if (gradient === 0) {
        solutionText.innerHTML = "<i>A</i> must not be equal to 0!"
    } else {
        let solution = (-yIntercept) / gradient
        solutionText.innerHTML = "&#119909; = ".concat(solution)
    }
    solutionDiv.style.display = "block"
    

}