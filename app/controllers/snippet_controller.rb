class SnippetController < ApplicationController
  layout "comment"

  def comment
    @snippet = FileServer.render_snippet(params[:id], {op: "render"})
  end
end
