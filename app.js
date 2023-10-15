// Get a reference to the Tableau visualization object
var viz;

function initializeViz() {
    var containerDiv = document.getElementById('viz1697355061231'); // Use the same ID as in your HTML
    var options = {
        hideTabs: true,
        width: '100%',
        height: (containerDiv.offsetWidth * 0.75) + 'px',
        onFirstInteractive: function () {
            // Store a reference to the visualization object
            viz = viz.getVizs()[0];
        }
    };
    
    viz = new tableau.Viz(containerDiv, 'https://public.tableau.com/views/CourseraTableau_16973521766220/Boxplot?:language=en-US&:display_count=n&:origin=viz_share_link', options);
}

// Function to resize the visualization
function resizeViz() {
    var containerDiv = document.getElementById('viz1697355061231');
    viz.setFrameSize(containerDiv.offsetWidth, containerDiv.offsetWidth * 0.75);
}

// Add an event listener to resize the visualization when the window is resized
window.addEventListener('resize', resizeViz);

// Call initializeViz when the page loads
document.addEventListener('DOMContentLoaded', initializeViz);
