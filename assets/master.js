const _div = document.querySelectorAll('main>section>div')

_div.forEach(key => {
    key.addEventListener('click', () => playNote(key))
})

document.addEventListener('keydown', e => {
    const allKeys = ['z', 's', 'x', 'd', 'c', 'v', 'g', 'b', 'h', 'n', 'j', 'm', 'q', '2', 'w', '3', 'e', 'r', '5', 't', '6', 'y', '7', 'u', 'i', '9', 'o', '0', 'p', '[', '=', ']']
    const keyIndex = allKeys.indexOf(e.key)

    if (e.repeat) return
    if (keyIndex != -1) playNote(_div[keyIndex])
})

function playNote(key) {
    const noteAudio = document.getElementById(key.dataset.note)
    noteAudio.currentTime = 0
    noteAudio.play()
    key.classList.add('active')
    setInterval(() => {
        key.classList.remove('active')
    }, 200);
}