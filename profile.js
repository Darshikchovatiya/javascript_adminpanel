function profile(){
    let P_info = JSON.parse(localStorage.getItem('checkUserLogin'));
    let info = "";
            
    info = `
                <span class="fw-semibold d-block">${P_info.username}</span>
                <small class="text-muted">${P_info.useremail}</small>
            `
        document.getElementById('profile_info').innerHTML = info;
}
profile();