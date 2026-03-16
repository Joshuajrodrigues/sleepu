// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/

#[tauri::command]
fn shutdown_system() {
    #[cfg(target_os = "windows")]
    {
        use std::process::Command;

        Command::new("shutdown")
            .args(["/s", "/t", "0"])
            .spawn()
            .expect("failed to shutdown Windows");
    }

    #[cfg(target_os = "linux")]
    {
        use std::process::Command;
        // 'now' triggers immediate poweroff
        Command::new("shutdown")
            .arg("now")
            .spawn()
            .expect("failed to shutdown Linux");
    }
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![shutdown_system])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
