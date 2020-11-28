class VideoCommandsChannel < ApplicationCable::Channel
  def subscribed
    stream_from "video_commands_channel"
    # stream_from "chat_#{params[:room]}"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def send_command (data)
    puts "data: #{data}"
    ActionCable.server.broadcast("video_commands_channel", data)
  end

  # def receive(data)
  #   puts data
  #   ActionCable.server.broadcast(data)
  # end
end
