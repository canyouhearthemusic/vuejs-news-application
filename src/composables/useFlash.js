import Swal from 'sweetalert2'

export function useFlash() {
    function flash(title, text, icon = 'success', footer = '') {
        return Swal.fire({
            title, text, icon, footer
        });
    }

    return { flash }
}