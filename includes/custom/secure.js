const checkIfLogged = () => {
    const isLogged = localStorage.getItem('IsLogged');
    if (isLogged === "true") {
        // Do Nothing
    } else {
        window.location.href = './index.html';
    }
}

checkIfLogged();