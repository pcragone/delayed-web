module Delayed
  module Web
    class StatusDecorator < SimpleDelegator
      def status
        case
        when failed_at
          'failed'
        when locked_at && locked_by
          'executing'
        else
          'queued'
        end
      end

      def can_invoke?
        status != 'executing'
      end

      def can_destroy?
        status != 'executing'
      end

      def can_queue?
        status != 'queued' and status != 'executing'
      end
    end
  end
end
