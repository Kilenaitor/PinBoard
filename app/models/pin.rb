class Pin < ActiveRecord::Base
  belongs_to :user
  has_many :comments, dependent: :destroy
  
  has_attached_file :image, :styles => { :medium => "300x300>"}
  validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/
  
  acts_as_votable
  
  def self.search(search)
    where("title LIKE ?", "%#{search}%")
    where("description LIKE ?", "%#{search}%")
  end
  
end
