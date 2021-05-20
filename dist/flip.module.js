import Tick from '../tick/tick.core.module';
import Flip from './tick.view.flip.module';
if (typeof window !== 'undefined') {
    Tick.plugin.add(Flip);
}
export default Tick;