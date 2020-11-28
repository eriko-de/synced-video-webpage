App.video_commands = App.cable.subscriptions.create "VideoCommandsChannel",
  connected: ->
    console.log('connected')

  send_command: (cmd) ->
    this.perform('send_command', { command: cmd })

  disconnected: ->
    console.log('disconnected')
    # Called when the subscription has been terminated by the server

  received: (data) ->
    console.log("received: " + data.command)
    if data.command == 'play'
      video.play()

    if data.command == 'pause'
      video.pause()
    # Called when there's incoming data on the websocket for this channel
