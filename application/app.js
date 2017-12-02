function main() {
    console.log("Application initialized");

    // TODO: Put event handlers here
    // TODO: Put logic here

    $("#btnStartLoadTest").click(function() {
        test_load();
    });

    $("#btnLoadTestStatistics").click(function() {
        test_statistics();
    });
}

main();