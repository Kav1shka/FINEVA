weather.current(location,function(error,temp_f){

    if(error){
        console.error(error);
        return;
    }

    console.log(
        "The current weather reading is %s degree.",
        temp_f
    );
});

response.end(" ${temp_f}");