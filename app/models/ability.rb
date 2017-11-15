class Ability
  include CanCan::Ability

  def initialize(user)
    user || = User.new # guest user (not logged in)
    # can :read, Comment

    can [:destory], TrailComment do |trail_comment|
      trail_comment.user == user
    end

  end
end
