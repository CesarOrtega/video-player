const $video = document.querySelector('#video')
        const $play  = document.querySelector('#play')
        const $pause = document.querySelector('#pause')
        const $backward = document.querySelector('#backward')
        const $forward = document.querySelector('#forward')
        const $mute = document.querySelector('#mute')
        const $unmute = document.querySelector('#unmute')

        $play.addEventListener('click', handlePlay)
        $pause.addEventListener('click', handlePause)
        $backward.addEventListener('click', handleBackward)
        $forward.addEventListener('click', handleForward)
        $mute.addEventListener('click', handleMute)
        $unmute.addEventListener('click', handleUnmute)


        function handlePlay(){
            $video.play()
            $play.hidden = true
            $pause.hidden = false
            console.log('le diste click al boton de play')
        }

        function handlePause(){
            $video.pause()
            $play.hidden = false
            $pause.hidden = true
            console.log('le diste click al boton de pause')
        }

        function handleBackward(){
            $video.currentTime = $video.currentTime - 10
            console.log('le diste click al boton de atrasar 10 seg',$video.currentTime)
        }

        function handleForward(){
            $video.currentTime = $video.currentTime + 10
            console.log('le diste click al boton de adelantar 10 seg',$video.currentTime)
        }

        function handleMute(){
            console.log('le diste click al boton de mute')
        }

        function handleUnmute(){
            console.log('le diste click al boton de unmute',)
        }





        
        const $progress = document.querySelector('#progress')
        $video.addEventListener('loadedmetadata', handleLoaded)
        $video.addEventListener('timeupdate', handleTimeUpdate)

        function handleLoaded() {
            $progress.max = $video.duration
            console.log('ha cargado el video', $video.duration)
        }

        function handleTimeUpdate() {
            $progress.value = $video.currentTime
            /*console.log('tiempo actual', $video.currentTime)*/
        }

        $progress.addEventListener('input', handleInput)

        function handleInput() {
            $video.currentTime = $progress.value
            console.log($progress.value)
        }
























